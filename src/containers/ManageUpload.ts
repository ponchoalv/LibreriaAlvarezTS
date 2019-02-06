import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from 'src/actions/uploadActions';
import ManageUpload from 'src/components/ManageUpload';
import { IDateOfList, IDeleteListData, IStoreState } from 'src/types/index';

export function mapStateToProps({ upload } : IStoreState) {
    return {
        addingNewDate: upload.addingNewDate,
        error: upload.error,
        filteredlistOptions: upload.filteredLists,
        listTypeOptions: upload.listTypeOptions,
        listsDateOptions: upload.listsDateOptions,
        loading: upload.loading,
        nuevaPlanilla: upload.nuevaPlanilla,
        selectedDate: upload.selectedDate,
    }
}
    
export function mapDispatchToProps(dispatch: Dispatch<actions.UploadListAction>) {
    return {
        clearEditingDate: () => dispatch(actions.ClearEditingDate()),
        deleteList: (list: IDeleteListData) => dispatch(actions.DeleteList(list)),
        init: () => dispatch(actions.FetchLastDates()),
        selectedDateChanged: (value: IDateOfList) => dispatch(actions.UpdateSelectedDate(value)),
        startEditing: () => dispatch(actions.StartEditing()),
        toggleNuevaPlanilla: () => dispatch(actions.ToggleNuevaPlanilla()),
        uploadForm: (form: FormData) => dispatch(actions.UploadList(form)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUpload);