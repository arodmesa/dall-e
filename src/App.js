import './App.css';
import RequiredFields from './components/RequiredFields';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {useState} from 'react';
import {all_help_messages, fields_data, default_parameters} from './constants';
import {getResults, destructuringResults, displayRequestResults} from './utilities_functions';

function App() {
  const [selected_feature, setSelectedFeature] = useState('Text Completion');
  const [prompt_text, setPromptText] = useState('');
  const [current_fields, setCurrentFields] = useState(fields_data["Text Completion"]);
  const [custom_parameters, setCustomParameters] = useState({...default_parameters});
  const [help_message, setHelpMessage] = useState("Creates a completion for the provided prompt and parameters");
  const [isLoading, setLoading] = useState(false);
  const [resultsComponent, setResultComponent] = useState(null); 

  function modifyParameters(event, field){
    if ((field==="max_tokens" && Number(event.target.value)>100)
        || (field==="number_of_results" && (Number(event.target.value)>5))
        || (field!=="instruction" && (Number(event.target.value)<0 || !Number.isInteger(Number(event.target.value)))))
      {
      setCustomParameters((prevState)=>{
        prevState[field]=default_parameters[field];
        return({...prevState});
      })
      return;
    }
    setCustomParameters((prevState)=>{
      prevState[field]=event.target.value;
      return({...prevState});
    })
  }
  function changeAIfunction(event){
    setSelectedFeature(event.target.value);
    setHelpMessage(all_help_messages[event.target.value]);
    setCurrentFields(fields_data[event.target.value]);
    setCustomParameters({...default_parameters});
    setResultComponent(null);
  }
  async function handleBtn(){
    setLoading(true);
    let results = await getResults(custom_parameters, prompt_text, selected_feature);
    if (results===null){
      alert('Some error has occured');
      setResultComponent(null);
      setLoading(false);
    }else{
      results = destructuringResults(results, selected_feature);
      setResultComponent(displayRequestResults[selected_feature](results, prompt_text));
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1 className='app_title'>Dall E Interface</h1>
      <p className='p_title'>
        A neural network that creates images from text captions for a wide range of concepts expressible in natural language.
        <br/>
        It also do some other cool things...
      </p>
      <div className='div_row'>
        <div className='div_row div_textarea'>
          <textarea className='prompt_textarea' value={prompt_text} placeholder={"Type your text in here..."} onChange={(event)=>setPromptText(event.target.value)}></textarea>
          <div className='div_column'>
            <Select
              value={selected_feature}
              onChange={changeAIfunction}
              sx={{
                color: 'black',
                fontWeight: 'bolder',
                fontFamily: 'monospace',
                fontSize: 'calc(0.45em + 0.4vw)',
              }}
            >
              <MenuItem value={"Text Completion"}>Text Completion</MenuItem>
              <MenuItem value={"Text Edition"}>Text Edition</MenuItem>
              <MenuItem value={"Text Moderation"}>Text Moderation</MenuItem>
              <MenuItem value={"Image Generation"}>Image Generation</MenuItem>
            </Select>
            <div className='div_row'>
              <p className='help_text'>{help_message}</p>
            </div>
          </div>  
        </div>                
      </div>
      <RequiredFields current_fields={current_fields} modifyParameters={modifyParameters} custom_parameters={custom_parameters}/>
      {(isLoading)? 
        <CircularProgress />:
        <Button variant="contained" size="large" onClick={handleBtn} sx={{
                  color: 'black',
                  fontWeight: 'bolder',
                  fontFamily: 'monospace',
                  fontSize: 'calc(0.5em + 0.6vw)',
                  marginTop: '20px'
                }}
        >Let's GO</Button>
      }
      {resultsComponent}
      <footer className='p_title'>Dali-E API <a href='https://openai.com/api/' target='_blank'>link</a> Thanks to the developers</footer>
    </div>
  );
}

export default App;
