import IDisabled from './IDisabled';

interface ITextField extends IDisabled {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaELement>
  ) => void;
}

export default ITextField;
