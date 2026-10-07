import { MULTI_LEVEL_CARD_TYPE, UNIQUE_LEVEL_CARD_TYPE } from "./cardConstants";
import { CardType } from "./cardTypes";
import { CardProperties } from "./cardTypes";
import { houseCardProperties } from "./cardProperties/house";
import { farmCardProperties } from "./cardProperties/farm";
import { mineCardProperties} from "./cardProperties/mine";
import { marketCardProperties } from "./cardProperties/market";
import { bankCardProperties } from "./cardProperties/hospital";
import { hospitalCardProperties } from "./cardProperties/bank";
import { barrackCardProperties } from "./cardProperties/barrack";
import { airforceCardProperties} from "./cardProperties/airforce";
import { armyCardProperties } from "./cardProperties/army";
import { missileCardProperties } from "./cardProperties/missile";
import { embassyCardProperties} from "./cardProperties/embassy";
import { techCardProperties } from "./cardProperties/tech";
import { hbombCardProperties } from "./cardProperties/hbomb";

export const CARD_PROPERTIES: Partial<Record<CardType, CardProperties>> = {
    [MULTI_LEVEL_CARD_TYPE.HOUSE]: {...houseCardProperties},
    [MULTI_LEVEL_CARD_TYPE.FARM]: {...farmCardProperties},
    [MULTI_LEVEL_CARD_TYPE.MINE]: {...mineCardProperties},
    [MULTI_LEVEL_CARD_TYPE.MARKET]: {...marketCardProperties},
    [MULTI_LEVEL_CARD_TYPE.BANK]: {...bankCardProperties},
    [MULTI_LEVEL_CARD_TYPE.HOSPITAL]: {...hospitalCardProperties},
    [MULTI_LEVEL_CARD_TYPE.BARRACK]: {...barrackCardProperties},
    [MULTI_LEVEL_CARD_TYPE.ARMY]: {...armyCardProperties},
    [MULTI_LEVEL_CARD_TYPE.AIR_FORCE]: {...airforceCardProperties},
    [UNIQUE_LEVEL_CARD_TYPE.MISSILE]: {...missileCardProperties},
    [UNIQUE_LEVEL_CARD_TYPE.EMBASSY]: {...embassyCardProperties},
    [MULTI_LEVEL_CARD_TYPE.TECH]: {...techCardProperties},
    [UNIQUE_LEVEL_CARD_TYPE.HBOMB]: {...hbombCardProperties}
}