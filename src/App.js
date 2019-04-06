import React, { Component } from 'react';
import './App.css';
import './button.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <button class="Leftbutton" onclick="myFunction()"></button>
        <script>
            function myFunction() {
                alert('what ever')
            }
        </script>
        </div>

        <div>
        <button class="Rightbutton" onclick="myFunction()"></button>
        <script>
            function myFunction() {
                alert('what ever')
            }
        </script>
        </div>

      </div>
    );
  }
}

export default App;
