/**
 * External dependencies
 */
import { registerExperimentalBlockType } from '@woocommerce/block-settings';
import { __ } from '@wordpress/i18n';
import { formStep, Icon } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import { saveInnerblocks } from '../../save-block';

const blockConfig = {
	title: __( 'Form Step', 'woo-gutenberg-products-block' ),
	description: __( 'Checkout Form Step', 'woo-gutenberg-products-block' ),
	icon: {
		src: <Icon srcElement={ formStep } />,
		foreground: '#874FB9',
	},
	attributes: {
		title: {
			type: 'string',
			default: __( 'Step', 'woo-gutenberg-products-block' ),
		},
		description: {
			type: 'string',
			default: __(
				'Step description text.',
				'woo-gutenberg-products-block'
			),
		},
		showStepNumber: {
			type: 'boolean',
			default: true,
		},
	},
	apiVersion: 2,
	edit,
	save: saveInnerblocks,
};

registerExperimentalBlockType( 'woocommerce/checkout-form-step', {
	...blockConfig,
} );
