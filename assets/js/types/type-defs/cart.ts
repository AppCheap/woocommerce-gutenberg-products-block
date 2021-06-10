/* eslint-disable camelcase -- API responses have camelcase properties */

/**
 * Internal dependencies
 */
import {
	MetaKeyValue,
	ShippingRateItem,
	ExtensionsData,
} from './cart-response';
export interface CurrencyInfo {
	currencyCode: string;
	currencySymbol: string;
	currencyMinorUnit: number;
	currencyDecimalSeparator: string;
	currencyThousandSeparator: string;
	currencyPrefix: string;
	currencySuffix: string;
}

export interface CartTotalsItem extends CurrencyInfo {
	totalDiscount: string;
	totalDiscountTax: string;
}

export interface CartCouponItem {
	code: string;
	discountType: string;
	totals: CartTotalsItem;
}

export interface FirstNameLastName {
	firstName: string;
	lastName: string;
}

export interface BaseAddress {
	address1: string;
	address2: string;
	city: string;
	state: string;
	postcode: string;
	country: string;
}

export interface CartShippingPackageShippingRate extends CurrencyInfo {
	rateId: string;
	name: string;
	description: string;
	deliveryTime: string;
	price: string;
	taxes: string;
	instanceId: number;
	methodId: string;
	metaData: Array< MetaKeyValue >;
	selected: boolean;
}

export interface CartShippingRate {
	packageId: number;
	name: string;
	destination: BaseAddress;
	items: Array< ShippingRateItem >;
	shippingRates: Array< CartShippingPackageShippingRate >;
}

export interface CartShippingAddress extends BaseAddress, FirstNameLastName {
	company: string;
}

export interface CartBillingAddress extends CartShippingAddress {
	phone: string;
	email: string;
}

export interface CartImageItem {
	id: number;
	src: string;
	thumbnail: string;
	srcset: string;
	sizes: string;
	name: string;
	alt: string;
}

export interface CartVariationItem {
	attribute: string;
	value: string;
}

export interface CartItemPrices extends CurrencyInfo {
	price: string;
	regularPrice: string;
	salePrice: string;
	priceRange: null | { minAmount: string; maxAmount: string };
	rawPrices: {
		precision: number;
		price: string;
		regularPrice: string;
		salePrice: string;
	};
}

export interface CartItemTotals extends CurrencyInfo {
	lineSubtotal: string;
	lineSubtotalTax: string;
	lineTotal: string;
	lineTotalTax: string;
}

export type CatalogVisibility = 'catalog' | 'hidden' | 'search' | 'visible';

export interface CartItem {
	key: string;
	id: number;
	quantity: number;
	catalogVisibility: CatalogVisibility;
	quantityLimit?: number;
	name: string;
	summary: string;
	shortDescription: string;
	description: string;
	sku: string;
	lowStockRemaining: null | number;
	backordersAllowed: boolean;
	showBackorderBadge: boolean;
	soldIndividually: boolean;
	permalink: string;
	images: Array< CartImageItem >;
	variation: Array< CartVariationItem >;
	prices: CartItemPrices;
	totals: CartItemTotals;
	extensions: ExtensionsData;
	itemData: Record< string, unknown >[];
}

export interface CartTotalsTaxLineItem {
	name: string;
	price: string | number;
	rate: string;
}

export interface CartFeeItemTotals extends CurrencyInfo {
	total: string;
	totalTax: string;
}

export interface CartFeeItem {
	id: string;
	name: string;
	totals: CartFeeItemTotals;
}

export interface CartTotals extends CurrencyInfo {
	totalItems: string;
	totalItemsTax: string;
	totalFees: string;
	totalFeesTax: string;
	totalDiscount: string;
	totalDiscountTax: string;
	totalShipping: string;
	totalShippingTax: string;
	totalPrice: string;
	totalTax: string;
	taxLines: Array< CartTotalsTaxLineItem >;
}

export interface CartErrorItem {
	code: string;
	message: string;
}

export interface Cart {
	coupons: Array< CartCouponItem >;
	shippingRates: Array< CartShippingRate >;
	shippingAddress: CartShippingAddress;
	billingAddress: CartBillingAddress;
	items: Array< CartItem >;
	itemsCount: number;
	itemsWeight: number;
	needsPayment: boolean;
	needsShipping: boolean;
	hasCalculatedShipping: boolean;
	fees: Array< CartFeeItem >;
	totals: CartTotals;
	errors: Array< CartErrorItem >;
	paymentRequirements: Array< unknown >;
	extensions: ExtensionsData;
}
export interface CartMeta {
	updatingCustomerData: boolean;
	updatingSelectedRate: boolean;
	isCartDataStale: boolean;
	applyingCoupon: string;
	removingCoupon: string;
}
export interface ExtensionCartUpdateArgs {
	data: Record< string, unknown >;
	namespace: string;
}
