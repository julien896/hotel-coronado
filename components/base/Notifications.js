import { notification } from 'antd';

export const notificationSuccess = () => {
    notification.success({
      message: 'Mensaje enviado con exito.',
      style: {
        background: 'rgba(57, 228, 137, 0.15)',
        border: '0.5px solid #39E489',
        borderRadius: '3px',
      },
      placement: 'bottomRight'
    });
  };

  export const notificationError = () => {
    notification.error({
      message: 'Ha ocurrido un error. Revise sus datos e intente nuevamente.',
      placement: 'bottomRight',
      style: {
        background: 'rgba(254, 61, 46, 0.1)',
        border: '0.5px solid #FE3D2E',
        borderRadius: '3px',
      },
    });
  };