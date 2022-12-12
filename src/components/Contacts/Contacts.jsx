import { Component } from "react";

class Contacts extends Component{ 
    state={
        filter: '',
    }
addTar=(even)=>{
   
    
    const r = even.target.value;
    this.state.filter = r;
    this.setState({filter: r});
}

filtered=()=>{
    const{contacts} = this.props.cont; 
        if (this.state.filter) {
         return(
                contacts.map((m,j)=>
                m.namePhone.includes(this.state.filter)?
                <li key={j}>
                    <p>{m.namePhone}: {m.numberPhone}</p>
                    <button id={j} type="button" onClick={this.delete} >delete</button>
                </li> :'')
                   
            ); 
    }  else{
        return(
            contacts.map((m,j)=> <li key={j}>
            <p>{m.namePhone}: {m.numberPhone}</p>
            <button id={j} type="button" onClick={this.delete} >delete</button>
        </li>)
        )
    }   
    
           
}
delete=(even)=>{
    const{contacts} = this.props.cont;
    this.setState({contacts : contacts.filter((cont)=> cont.id !== even.target.id)})
    contacts.splice(even.target.id);
}

render(){
    const{contacts} = this.props.cont;
    const {filter} = this.state;
    // contacts.length?console.log(contacts[contacts.length-1].namePhone):console.log("rr");
    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                { this.filtered()}
            </ul>
            
            <h2>Find firs name</h2>
           <input type="text" 
            name="firstName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.addTar}/>
        </div>
    )
}
}
export default Contacts;