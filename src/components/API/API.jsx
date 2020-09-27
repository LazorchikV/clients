import React, {Component} from 'react';






class ApiService extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        date: new Date(),
        data: []
      };
    }
  
    componentDidMount() {
      fetch("https://meowfacts.herokuapp.com/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data                    
            });
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, data } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <div>
            {data.map(data => (
              <div key={data.data}>
                {data.data}
                <pre>{JSON.stringify(this.state.date)}</pre>
                <pre>{JSON.stringify(this.state.data)}</pre>
              </div>
            ))}
          </div>
        );
      }
    }
  };
  export default ApiService;