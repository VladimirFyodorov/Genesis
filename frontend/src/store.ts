import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { State, OptionsEn, OptionsRu, optionsMap, FormStates, Entity } from './types/index';


export const useStore = defineStore('store',  () => {
  const state: State = reactive({
    formState: FormStates.INVALID,
    selectedOption: 'default',
    entities: [],
  });

  const btnDisabled = computed(() => state.formState !== FormStates.VALID);
  const selectDisabled = computed(() => state.formState === FormStates.PENDING);

  function changeSelect(option: OptionsEn = 'default'): void {
    state.selectedOption = option;
    state.formState = state.selectedOption === 'default' ? FormStates.INVALID : FormStates.VALID;
  }

  function startSubmit(): void {
    if (state.selectedOption === 'default') return;
    state.formState = FormStates.PENDING;
  }

  function endSubmit(entity: Entity): void {
    if (state.selectedOption === 'default') return;
    state.entities.push(entity);
    changeSelect('default');
  }

  function endSubmitWithErr(): void {
    changeSelect('default');
  }


  return { state, btnDisabled, selectDisabled, changeSelect, startSubmit, endSubmit, endSubmitWithErr}
})
