import React, { FC } from 'react';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Label from '../common/label/Label';
import cupIcon from '../../assets/images/cup.svg';
import shieldIcon from '../../assets/images/shield.svg';
import Select from '../common/select/Select';
import classes from './startForm.module.scss';
import ButtonStyle from '../../enums/ButtonStyle';
import { StartFormData } from '../../interfaces/StartFormData';

interface Props {
  formSubmitHandler: (event: React.SyntheticEvent) => void;
  selectChangeHandler: (event: React.FormEvent<HTMLSelectElement>) => void;
  inputChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  formData: StartFormData;
  selectOptions: Array<string>;
}

const StartForm: FC<Props> = ({ formSubmitHandler, formData, inputChangeHandler, selectChangeHandler, selectOptions }) => {
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div>
        <div className={classes.formGroup}>
          <Label imagePath={cupIcon} imageAlt='Difficulty'>
            Difficulty
          </Label>
          <Select variants={selectOptions} value={formData.difficulty} onChange={selectChangeHandler} required />
        </div>
        <div className={classes.formGroup}>
          <Label imagePath={shieldIcon} imageAlt='Amount'>
            Amount
          </Label>
          <Input type='text' value={formData.amount} onChange={inputChangeHandler} placeholder='Input amount' required />
        </div>
      </div>
      <Button isSubmitButton buttonStyle={ButtonStyle.GRADIENT}>
        start
      </Button>
    </form>
  );
};

export default StartForm;
