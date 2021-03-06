import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state) => {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
};

const mapDispatchToProps = (dispatch) => ({
  ...laneActions,
  addNote: createNote,
});

    
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
