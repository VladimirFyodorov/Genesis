import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { State, Options, FormStates } from './types/index';


export const useStore = defineStore('store',  () => {
  const state: State = reactive({
    formState: FormStates.INVALID,
    selectedOption: 'default',
    entities: [],
  });

  const btnDisabled = computed(() => state.formState !== FormStates.VALID);
  const selectDisabled = computed(() => state.formState === FormStates.PENDING);

  function changeSelect(value: Options = 'default'): void {
    state.selectedOption = value;
    state.formState = state.selectedOption === 'default' ? FormStates.INVALID : FormStates.VALID;
  }

  function startSubmit(): void {
    state.formState = FormStates.PENDING;
  }

  function endSubmit(id: number): void {
    if (state.selectedOption === 'default') return;
    const entety = { id, name: state.selectedOption};
    state.entities.push(entety);
    changeSelect('default');
  }


  return { state, btnDisabled, selectDisabled, changeSelect, startSubmit, endSubmit}
})
