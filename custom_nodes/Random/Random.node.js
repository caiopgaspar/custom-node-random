"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const axios_1 = require("axios");
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            icon: 'file:icon.svg',
            group: ['transform'],
            version: 1,
            description: 'Este conector gera um número aleatório usando Random.org entre os números mínimo e máximo informados',
            defaults: {
                name: 'True Random Number Generator',
                color: '#C8A6F7',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    description: 'Número mínimo',
                    required: true,
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    default: 100,
                    description: 'Número máximo',
                    required: true,
                },
            ],
        };
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = this.getInputData();
            const returnData = [];
            for (let i = 0; i < items.length; i++) {
                const min = this.getNodeParameter('min', i);
                const max = this.getNodeParameter('max', i);
                const response = yield axios_1.default.get(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`);
                const randomNumber = parseInt(response.data, 10);
                returnData.push({
                    json: {
                        randomNumber,
                    },
                });
            }
            return [returnData];
        });
    }
}
exports.Random = Random;
