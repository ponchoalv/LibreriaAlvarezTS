import * as actions from 'src/actions/uploadActions';
import { StoreState, DateOfList, DeleteListData } from 'src/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ManageUpload from 'src/components/ManageUpload';

export function mapStateToProps({ upload } : StoreState) {
    return {
        loading: upload.loading,
        error: upload.error,
        selectedDate: upload.selectedDate,
        filteredlistOptions: upload.filteredLists,
        listsDateOptions: upload.listsDateOptions,
        addingNewDate: upload.addingNewDate,
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<actions.UploadListAction>) {
    return {
        init: () => dispatch(actions.FetchLastDates()),
        selectedDateChanged: (value: DateOfList) => dispatch(actions.UpdateSelectedDate(value)),
        uploadForm: (form: FormData) => dispatch(actions.UploadList(form)),
        startEditing: () => dispatch(actions.StartEditing()),
        stopEditing: () => dispatch(actions.StopEditing()),
        deleteList: (list: DeleteListData) => dispatch(actions.DeleteList(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUpload);
