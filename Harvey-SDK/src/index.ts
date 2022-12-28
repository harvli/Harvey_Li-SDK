import { Base } from './base';
import { Get } from './read';
import { applyMixins } from './utils';

// bundle together all of our components
class Typicode extends Base {}
interface Typicode extends Get {}

applyMixins(Typicode, [Get]);

export default Typicode;
