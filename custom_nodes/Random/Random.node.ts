import { INodeType, INodeTypeDescription, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import axios from 'axios';

export class Random implements INodeType
{
    description: INodeTypeDescription = {
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

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>
    {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i) as number;
            const max = this.getNodeParameter('max', i) as number;

            const response = await axios.get(
                `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
            );

            const randomNumber = parseInt(response.data, 10);

            returnData.push({
                json: {
                    randomNumber,
                },
            });
        }

        return [returnData];
    }
}
