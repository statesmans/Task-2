import task from '../images/task.png';
import randomThought from '../images/thought.png';
import idea from '../images/idea.png';
import quote from '../images/quote.png';

export const imagePaths = { 
  task,
  randomThought,
  idea,
  quote,
};

export default function getIcon(type) {
  return imagePaths[type]
}