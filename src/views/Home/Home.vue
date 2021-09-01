<template>
  <Section>
    <Container>
      <FormModalTextarea />
      <FormModalButton />
      <FormModalResult />
      <FormModal />
      <Table :data="getTable" />
    </Container>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "../../components/Base/Container/Container.vue";
import Section from "../../components/Base/Section/Section.vue";
import FormModalTextarea from "../../components/FormModalView/FormModalTextarea/FormModalTextarea.vue";
import FormModalButton from "@/components/FormModalView/FormModalButton/FormModalButton.vue";
import FormModal from "@/components/FormModalView/FormModal/FormModal.vue";
import FormModalResult from "@/components/FormModalView/FormModalResult/FormModalResult.vue";
import Table from "@/components/Table/Table/Table.vue";
import { useStore } from "@/use/useStore";
import { Home } from "@/views/Home/Home";

export default defineComponent({
  setup() {
    return { ...Home() };
  },
  name: "Home",
  components: {
    Table,
    FormModalResult,
    FormModal,
    FormModalButton,
    Section,
    Container,
    FormModalTextarea,
  },
});
</script>
