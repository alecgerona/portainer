import sanitize from 'sanitize-html';
import bootbox from 'bootbox';

import {
  cancelRegistryRepositoryAction,
  confirmAsync,
  confirmDeassociate,
  confirmDeletion,
  confirmDetachment,
  confirmDeletionAsync,
  confirmEndpointSnapshot,
  confirmChangePassword,
  confirmImageExport,
  confirmImageForceRemoval,
  confirmRedeploy,
  confirmUpdate,
  confirmWebEditorDiscard,
  confirm,
} from './confirm';
import {
  confirmContainerDeletion,
  confirmContainerRecreation,
  confirmServiceForceUpdate,
  confirmStackUpdate,
  confirmKubeconfigSelection,
  selectRegistry,
} from './prompt';

export function enlargeImage(imageUrl: string) {
  const imageSanitized = sanitize(imageUrl);

  bootbox.dialog({
    message: `<img src="${imageSanitized}" style="width:100%" />`,
    className: 'image-zoom-modal',
    onEscape: true,
  });
}

/* @ngInject */
export function ModalServiceAngular() {
  return {
    enlargeImage,
    confirmWebEditorDiscard,
    confirmAsync,
    confirm,
    confirmImageForceRemoval,
    cancelRegistryRepositoryAction,
    confirmDeletion,
    confirmDetachment,
    confirmDeassociate,
    confirmUpdate,
    confirmRedeploy,
    confirmDeletionAsync,
    confirmContainerRecreation,
    confirmEndpointSnapshot,
    confirmChangePassword,
    confirmImageExport,
    confirmServiceForceUpdate,
    confirmStackUpdate,
    selectRegistry,
    confirmContainerDeletion,
    confirmKubeconfigSelection,
  };
}
