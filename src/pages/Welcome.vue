<template>
  <Content>
    <div class="welcome">
      <Field>
        <Input type="email" text="Endereço de E-mail" />
      </Field>
      <Field>
        <RadioGroup v-model="foo" @changed="foo = $event" />
      </Field>
      <Field>
        <Button text="Continuar" />
      </Field>
    </div>
  </Content>  
</template>

<script>
import Content from "@/template/content/Content";
import Field from "@/components/field/Field";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import RadioGroup from "@/components/radio-group/RadioGroup";

export default {
  name: 'Welcome',
  components: { Content, Field, Input, Button, RadioGroup },
  data: () => {
    return {
      foo: ''
    }
  },
   methods: {
    test(e) {
      console.log("test", e);
    }
  }
}
</script>

<style></style>