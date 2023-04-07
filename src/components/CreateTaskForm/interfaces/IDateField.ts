import IDisabled from './IDisabled';

interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

export default IDateField;
