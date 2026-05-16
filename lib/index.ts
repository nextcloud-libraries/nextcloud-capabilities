/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import { loadState } from '@nextcloud/initial-state'

export function getCapabilities(): Object {
	try {
		return loadState('core', 'capabilities')
	} catch (error) {
		if (!('_oc_capabilities' in window)) {
			return {}
		}
		return window['_oc_capabilities'] as Object
	}
}
