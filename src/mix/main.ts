import {Hello} from './hello'
import * as mix from './goodbye'

const h = new Hello();
h.say();

const g = new mix.GoodBye();
g.say();
