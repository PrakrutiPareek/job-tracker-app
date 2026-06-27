import Button from "../Button";

const ManualFormButton = (onClick) => {
  return (
    <div className="flex justify-end gap-2 mt-2 mr-10">
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
