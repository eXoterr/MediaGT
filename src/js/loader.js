import youtube from '../widgets/builtin/youtube/widget';
import example from '../widgets/builtin/example/widget';
import { registerWidget } from './widgets';

export function loadBuiltIn(){
    registerWidget(youtube)
    registerWidget(example)
}