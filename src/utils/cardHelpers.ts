import { CardName } from "../types"

export const generateCardName = (cardType: string, cardLevel: string) => {
    const newCardName = `${cardType}:${cardLevel}`
    return newCardName as CardName
}
