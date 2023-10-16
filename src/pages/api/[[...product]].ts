// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retreiveData, retreiveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.product![1]) {
    const data = await retreiveDataById("products", req.query.product![1]);
    res.status(200).json({ status: true, statusCode: 200, data });
  } else {2
    const data = await retreiveData("products");
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}
