import { Component } from "react";
class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isLoading : false,
      error: {isError: false, text:''}
    };
  }

  loadingData = async () =>{
    const {passedData} = this.props;
    this.setState({
      isLoading: true,
    })
    try{
      const fetchedData = await passedData();
      this.setState({
        data: fetchedData,
      })
    }catch(error){
      this.setState({
        error: {isError: true, text:{error}}
      })
    }finally{
      this.setState({
        isLoading: false,
      })
    }
  }


  componentDidMount(){
    this.loadingData();
  }

  render() {
    const { children } = this.props;

    const layout = children(this.state);

    return layout;
  }
}

export default DataLoader;
