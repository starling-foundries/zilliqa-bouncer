/**
 * Tests the on-chain transaction relayer contract
 */
const assert = require('assert');
import { Zilliqa } from '@zilliqa-js/zilliqa';
import * as zutils from '@zilliqa-js/util';
import config from '../config.json';

const zilliqa = new Zilliqa('http://localhost:4200');

