import type { NextApiResponse } from "next";
import { GetPostReq, GetPostRes } from "../../lib/apiTypes/getpost";

const handler = async (req: GetPostReq, res: NextApiResponse<GetPostRes>) => {
    
    res.status(200).json({ name: "John Doe" });
};

export default handler;