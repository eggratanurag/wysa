import "./index.css"; // css


/*
* OBJECT
*/
const Index = ({onChangeFunc}) => {

/*
* RETURN
*/
  return (
    <div className="wrapper">
      <input type="file" accept="image/*" id="file" onChange={onChangeFunc}/>
      <label htmlFor="file" className="btn-2">
        Upload
      </label>
    </div>
  );
}

/*
* EXPORT
*/
export default Index;
