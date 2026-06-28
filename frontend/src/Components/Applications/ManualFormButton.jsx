import Button from "../UI/Button";

const ManualFormButton = ({onClick}) => {
  return (
    <div className="flex flex-col sm:justify-end gap-2 mt-2 px-4  sm:px-6 sm:flex-row ">
      <Button variant="secondary" onClick={onClick}>
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </div>
  );
};

export default ManualFormButton;
