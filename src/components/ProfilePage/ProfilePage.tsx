import React, { useContext, useState, useLayoutEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import { AppContext } from '../App';

import { AppContainer } from '../containers/AppContainer';
import { AsideContainer } from '../containers/AsideContainer';
import { MainContainer } from '../containers/MainContainer';
import { Button } from '../Button/Button';
import { Input } from './Input';
import { Textarea } from './Textarea';

import styles from './ProfilePage.module.scss';

type FormInputs = {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
};

const onSubmit: SubmitHandler<FormInputs> = (data) => {
  console.log(JSON.stringify(data));
  alert(JSON.stringify(data, null, 2));
};

export const ProfilePage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputs>();
  const { id } = useParams();
  const { users } = useContext(AppContext);
  const user = users[users.findIndex((user) => user.id === +id)];
  const navigate = useNavigate();
  const [editingMode, setEditingMode] = useState<boolean>(false);

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  return (
    <AppContainer>
      <AsideContainer>
        <Button onClick={() => navigate(-1)}>Назад</Button>
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
                defaultValue={user.name}
                error={!!errors.name}
                {...register('name', { required: true, disabled: !editingMode })}
              />
              <Input
                label="User name"
                defaultValue={user.username}
                error={!!errors.username}
                {...register('username', { required: true, disabled: !editingMode })}
              />
              <Input
                label="E-mail"
                defaultValue={user.email}
                error={!!errors.email}
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                  disabled: !editingMode,
                })}
              />
              <Input
                label="Street"
                defaultValue={user.address.street}
                error={!!errors.street}
                {...register('street', { required: true, disabled: !editingMode })}
              />
              <Input
                label="City"
                defaultValue={user.address.city}
                error={!!errors.city}
                {...register('city', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Zip code"
                defaultValue={user.address.zipcode}
                error={!!errors.zipcode}
                {...register('zipcode', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Phone"
                defaultValue={user.phone}
                error={!!errors.phone}
                {...register('phone', { required: true, disabled: !editingMode })}
              />
              <Input
                label="Website"
                defaultValue={user.website}
                error={!!errors.website}
                {...register('website', { required: true, disabled: !editingMode })}
              />
              <Textarea
                label="Comment"
                error={!!errors.comment}
                {...register('comment', { disabled: !editingMode })}
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
