export interface OcAuthResponse {
    access_token: string,
    expires_in: number,
    token_type: string
}

export interface OcMeGetResponse {
    Buyer?: string,
    ID: string,
    Username: string,
    Password?: string,
    FirstName: string,
    LastName: string,
    Email?: string,
    Phone?: string,
    TermsAccepted?: string,
    Active: boolean,
    xp?: any,
    AvailableRoles: string[]
}

export interface OcListMeta {
    Page: number,
    PageSize: number,
    TotalCount: number,
    ItemRange: [
        number,
        number
    ]
}

export interface OcMeCategory {
    ID: string,
    Name: string,
    Description?: string,
    ListOrder: number,
    Active: boolean,
    ChildCount: number,
    xp: object
}

export interface OcMeCategoryList {
    Meta: OcListMeta,
    Items: OcMeCategory[]
}

export interface PriceBreak {
    Quantity: number,
    Price: number
}

export interface PriceSchedule {
    ID: string,
    Name: string,
    ApplyTax: boolean,
    ApplyShipping: boolean,
    MinQuantity: number,
    MaxQuantity?: number,
    UseCumulativeQuantity: boolean,
    RestrictedQuantity: boolean,
    PriceBreaks: PriceBreak [],
    xp: object
}

export interface OcMeProduct {
    PriceSchedule: PriceSchedule,
    ID: string,
    Name: string,
    Description: string,
    QuantityMultiplier: number,
    ShipWeight?: string,
    ShipHeight?: string,
    ShipWidth?: string,
    ShipLength?: string,
    Active: boolean,
    SpecCount?: number,
    xp: object
}

export interface OcMeProductList {
    Meta: OcListMeta
    Items: OcMeProduct [];
}

export interface OcMeAddress {
    ID: string,
    CompanyName: string,
    FirstName: string,
    LastName: string,
    Street1: string,
    Street2: string,
    City: string,
    State: string,
    Zip: string,
    Country: string,
    Phone: string,
    AddressName: string,
    xp: object
}

export interface OcMeAddressList {
    Meta: OcListMeta,
    Items: OcMeAddress [];
}

export interface Login {
    Username: string,
    Password: string
}