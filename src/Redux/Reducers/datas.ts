import { Value, Valid } from "../../modules";

export interface Action{
    type:string;
    datas:Value;
    valid:Valid;
}

export interface State{
    datas:Value;
    valid:Valid;
}

const initialState:State = {
    datas:{
        email:"",
        password:"",
        repPassword:"",
        nip:"",
        phone:"",
        position: ""
    },
    valid:{
        email:false,
        password:false,
        repPassword:false,
        nip:false,
        phone:true,
        position: false
    }
}

const datas = (state:State=initialState, action:Action):State => {

    switch(action.type){
        case "getDatas":
            return {...state, datas:action.datas, valid:action.valid}
            
        default:
            return state;
    }
}

export default datas;