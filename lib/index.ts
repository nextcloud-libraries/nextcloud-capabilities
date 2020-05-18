import { loadState } from '@nextcloud/initial-state'

export function getCapabilities(): Object {
	try {
		return loadState('core', 'capabilities')
	} catch (error) {
		console.debug('Could not find capabilities initial state fall back to _oc_capabilities')
		if (!('_oc_capabilities' in window)) {
		    throw Error('Could not locate capabilities')
		}
		return window['_oc_capabilities']
	}
}
