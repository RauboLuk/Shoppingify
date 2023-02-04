import type { NextApiRequest, NextApiResponse } from 'next'

const productsExample = [
    { name: 'Kiwi' },
    { name: 'Avocado' },
    { name: 'Pre-cooked corn 450g' },
]
const categories = [
    { name: 'Fruit and vegetables', products: productsExample },
    { name: 'Meat and Fish', products: productsExample },
]

interface Product {
    name: string
}

interface Category {
    name: string
    products: Product[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category[]>
) {
    await delayResponse()
    res.status(200).json(categories)
}

function delayResponse(ms = 1_000) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

export type { Category, Product }
