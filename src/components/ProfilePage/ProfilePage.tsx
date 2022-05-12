import React, { useContext, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { AppContext } from '../App';

import { AppContainer } from '../containers/AppContainer/AppContainer';
import { AsideContainer } from '../containers/AsideContainer/AsideContainer';
import { MainContainer } from '../containers/MainContainer/MainContainer';
import { Button } from '../Button/Button';
import { Input } from './Input';
import { Textarea } from './Textarea';

import styles from './ProfilePage.module.scss';

interface FormInputs {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
}

const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(JSON.stringify(data));

export const ProfilePage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputs>();
  const { profilePageUser, setPage } = useContext(AppContext);
  const [editingMode, setEditingMode] = useState<boolean>(false);
  return (
    <AppContainer>
      <AsideContainer>
        <Button
          onClick={() => {
            setPage('usersList');
          }}
        >
          Назад
        </Button>
      </AsideContainer>
      <MainContainer>
        <div className={styles.mainTitleContainer}>
          <div className={styles.mainTitle}>Профиль пользователя</div>
          <div className={styles.editButtonContainer}>
            <Button
              disabled={editingMode}
              onClick={() => {
                setEditingMode(true);
              }}
            >
              Редактировать
            </Button>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formInputsContainer}>
              <Input
                label="Name"
                defaultValue={profilePageUser.name}
                error={!!errors.name}
                register={register('name', { required: true, disabled: !editingMode })}
              />
              <Input
                label="User name"
                defaultValue={profilePageUser.username}
                error={!!errors.username}
                register={register('username', { required: true, disabled: !editingMode })}
              />
              <Input
                label="E-mail"
                defaultValue={profilePageUser.email}
                error={!!errors.email}
                register={register('email', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Street"
                defaultValue={profilePageUser.address.street}
                error={!!errors.street}
                register={register('street', { required: true, disabled: !editingMode })}
              />
              <Input
                label="City"
                defaultValue={profilePageUser.address.city}
                error={!!errors.city}
                register={register('city', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Zip code"
                defaultValue={profilePageUser.address.zipcode}
                error={!!errors.zipcode}
                register={register('zipcode', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Phone"
                defaultValue={profilePageUser.phone}
                error={!!errors.phone}
                register={register('phone', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Website"
                defaultValue={profilePageUser.website}
                error={!!errors.website}
                register={register('website', { required: true, disabled: !editingMode })}
              />
              <Textarea
                label="Comment"
                error={!!errors.comment}
                register={register('comment', { disabled: !editingMode })}
              />
            </div>
            <div className={styles.submitButtonContainer}>
              <Button type="submit" disabled={!editingMode} variant="green">
                Отправить
              </Button>
            </div>
          </form>
        </div>
      </MainContainer>
    </AppContainer>
  );
};
