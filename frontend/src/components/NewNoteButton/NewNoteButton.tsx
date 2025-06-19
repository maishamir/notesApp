import "./NewNoteButton.scss";
import AddIcon from "@mui/icons-material/Add";

function NewNoteButton() {
  return (
    <div className="newNoteButton">
      <div className="newNoteButton__button">
        <AddIcon fontSize="medium" sx={{ color: "white" }} />
      </div>
    </div>
  );
}

export default NewNoteButton;
