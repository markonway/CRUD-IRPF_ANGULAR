import { Action } from '@ngrx/store';

export class ChangeStateIprfs implements Action{
    type: string = '';
}

const INITIAL_STATE = { changeIrpfs: false }

export const changeIrpfs = (state = INITIAL_STATE , action: Action) => {
    console.log("change ;)");
    return { ...state, changeIrpfs: !state.changeIrpfs }
}