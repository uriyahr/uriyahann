import { NowRequest, NowResponse } from '@vercel/node';

const {
    MONGO_PASSWORD,
} = process.env;


function penis({ hi }) {
    console.log(hi);
}

export default async function (req: NowRequest, res: NowResponse) {
    return res.send('ily');
    connect('mongob', process.env.MONGO_PASSWORD)
};  