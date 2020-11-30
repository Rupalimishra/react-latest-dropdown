import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

class App extends React.Component {
    constructor(props) {
      super(props);
      
     
      
      this.state = { 
          isOpen: false,
          selectedvalue: "Neptunium",
          cursor: 0,
          result: [
            "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium",
            "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium",
             "Dubnium", "Seaborgium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium",
             "Darmstadtium", "Roentgenium",  "Copernicium", "Nihonium", "Flerovium",
              "Moscovium", "Livermorium", "Tennessine", "Oganesson"
          ]
         };
      this.timeOutId = null;
     
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onBlurHandler = this.onBlurHandler.bind(this);
      this.onFocusHandler = this.onFocusHandler.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
     
    
     
    }
   
  
    onClickHandler() {
        this.setState(currentState => ({
          isOpen: !currentState.isOpen
        }));
      }
    
      onBlurHandler() {
        this.timeOutId = setTimeout(() => {
          this.setState({
            isOpen: false
          });
        });
        
      }
        
      onFocusHandler() {
        clearTimeout(this.timeOutId);
      }
   
    
      
      
     handleKeyDown(e) {
      const { cursor, result } = this.state
      console.log("hii" + this.state.cursor)
      if (e.keyCode == 38 && cursor >= 0 ) {
        this.setState(prevState => ({
          
          cursor: this.state.cursor - 1,
          selectedvalue: result[cursor],
          
        }))
        
        if (cursor == result.length) {
          this.setState({ selectedvalue: "Neptunium" })
        }
        console.log("if" + this.state.cursor);
        
      } else if (e.keyCode == 40 && cursor < result.length) {
        this.setState(prevState => ({
          cursor: this.state.cursor + 1,
          selectedvalue: result[cursor]
        }))
        console.log("elseif" + this.state.cursor)
      }
  
    }
     
   
         
   
          
  
    render() {
         console.log(this.state.selectedvalue);
       
      return (
          <div onBlur={this.onBlurHandler}
               onFocus={this.onFocusHandler}
               onKeyDown={this.handleKeyDown} 
               
               >  
              
   <div className="listbox-area">
  <div className="left-area">
    <span id="exp_elem" >
      Choose an element:
    </span>
    <div id="exp_wrapper">
      <button onClick={this.onClickHandler}
     
       aria-haspopup="true"
      
       aria-expanded={this.state.isOpen}
       aria-labelledby="exp_elem exp_button"
       
      
      
      
      id="exp_button"
            > 
             {this.state.selectedvalue}
                  
      </button>
      {this.state.isOpen && (
       <div >
      <ul 
          id="exp_elem_list"
          role="listbox"
          aria-labelledby="exp_elem"
         
         >
           <div className="scroll-style">
        <li id="exp_elem_Np" role="option"  className={(this.state.selectedvalue=='Neptunium')?'active':''}   >
          Neptunium
        </li>
        <li id="exp_elem_Pu" role="option"  className={(this.state.selectedvalue=='Plutonium')?'active':''} >
          Plutonium
        </li>
        <li id="exp_elem_Am" role="option"  className={(this.state.selectedvalue=='Americium')?'active':''}  >
          Americium
        </li>
        <li id="exp_elem_Cm" role="option"   className={(this.state.selectedvalue=='Curium')?'active':''} >
          Curium
        </li>
        <li id="exp_elem_Bk" role="option" className={(this.state.selectedvalue=='Berkelium')?'active':''}>
          Berkelium
        </li>
        <li id="exp_elem_Cf" role="option" className={(this.state.selectedvalue=='Californium')?'active':''}>
          Californium
        </li>
        <li id="exp_elem_Es" role="option" className={(this.state.selectedvalue=='Einsteinium')?'active':''}>
          Einsteinium
        </li>
        <li id="exp_elem_Fm" role="option" className={(this.state.selectedvalue=='Fermium')?'active':''}>
          Fermium
        </li>
        <li id="exp_elem_Md" role="option" className={(this.state.selectedvalue=='Mendelevium')?'active':''}>
          Mendelevium
        </li>
        <li id="exp_elem_No" role="option" className={(this.state.selectedvalue=='Nobelium')?'active':''}>
          Nobelium
        </li>
        <li id="exp_elem_Lr" role="option" className={(this.state.selectedvalue=='Lawrencium')?'active':''}>
          Lawrencium
        </li>
        <li id="exp_elem_Rf" role="option" className={(this.state.selectedvalue=='Rutherfordium')?'active':''}>
          Rutherfordium
        </li>
        <li id="exp_elem_Db" role="option" className={(this.state.selectedvalue=='Dubnium')?'active':''}>
          Dubnium
        </li>
        <li id="exp_elem_Sg" role="option" className={(this.state.selectedvalue=='Seaborgium')?'active':''}>
          Seaborgium
        </li>
        <li id="exp_elem_Bh" role="option" className={(this.state.selectedvalue=='Bohrium')?'active':''}>
          Bohrium
        </li>
        <li id="exp_elem_Hs" role="option" className={(this.state.selectedvalue=='Hassium')?'active':''}>
          Hassium
        </li>
        <li id="exp_elem_Mt" role="option" className={(this.state.selectedvalue=='Meitnerium')?'active':''}>
          Meitnerium
        </li>
        <li id="exp_elem_Ds" role="option" className={(this.state.selectedvalue=='Darmstadtium')?'active':''}>
          Darmstadtium
        </li>
        <li id="exp_elem_Rg" role="option" className={(this.state.selectedvalue=='Roentgenium')?'active':''}>
          Roentgenium
        </li>
        <li id="exp_elem_Cn" role="option" className={(this.state.selectedvalue=='Copernicium')?'active':''}>
          Copernicium
        </li>
        <li id="exp_elem_Nh" role="option" className={(this.state.selectedvalue=='Nihonium')?'active':''}>
          Nihonium
        </li>
        <li id="exp_elem_Fl" role="option" className={(this.state.selectedvalue=='Flerovium')?'active':''}>
          Flerovium
        </li>
        <li id="exp_elem_Mc" role="option" className={(this.state.selectedvalue=='Moscovium')?'active':''}>
          Moscovium
        </li>
        <li id="exp_elem_Lv" role="option" className={(this.state.selectedvalue=='Livermorium')?'active':''}>
          Livermorium
        </li>
        <li id="exp_elem_Ts" role="option" className={(this.state.selectedvalue=='Tennessine')?'active':''}>
          Tennessine
        </li>
        <li id="exp_elem_Og" role="option" className={(this.state.selectedvalue=='Oganesson')?'active':''}>
          Oganesson
        </li>
        </div>
      </ul>
      </div>
      )}
    
    </div>
      
  </div>
      
</div>
    </div>
       
      );
    }
  }
  ReactDOM.render(<App /> ,document.getElementById('root'));