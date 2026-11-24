import {findQuestionType} from "../data/question-types.js";
import {standardPrompt} from "./standard-generator.js";
import {numericalPrompt} from "./numerical-generator.js";
import {clozePrompt} from "./cloze-generator.js";
import {pluginPrompt} from "./plugin-generator.js";
import {stackPrompt} from "./stack-generator.js";
export function generatePrompt(data){const type=findQuestionType(data.typeId);if(type.id==="stack")return stackPrompt(data,type);if(type.id==="numerical")return numericalPrompt(data,type);if(type.id==="cloze")return clozePrompt(data,type);if(type.group==="Plugins"||type.id==="ordering")return pluginPrompt(data,type);return standardPrompt(data,type);}