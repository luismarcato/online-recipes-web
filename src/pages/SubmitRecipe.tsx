import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { categories, difficulties } from "@/utils/constants";
import { useSubmitRecipeForm } from "@/hooks/useSubmitRecipeForm";

const SubmitRecipe = () => {
  const { form } = useSubmitRecipeForm();

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Compartilhe sua Receita
        </h1>
        <p className="text-muted-foreground text-lg">
          Inspire outros cozinheiros com suas criações culinárias
        </p>
      </div>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Informações da Receita</CardTitle>
          <CardDescription>
            Preencha os detalhes da sua receita especial
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form
            id="register-recipe"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup className="gap-4">
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Nome da receita *</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Ex: Brigadeiro Gourmet"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="description"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Descrição *</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Ex: Um delecioso brigadeiro feito com..."
                        rows={2}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <form.Field
                  name="category"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>Categoria *</FieldLabel>
                        <Select
                          name={field.name}
                          value={field.state.value}
                          onValueChange={field.handleChange}
                        >
                          <SelectTrigger
                            id="form-submit-recipe-select-category"
                            aria-invalid={isInvalid}
                            className=""
                          >
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.slice(1).map((category) => (
                              <SelectItem
                                value={category.value}
                                key={`category-${category.value}`}
                              >
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="difficulty"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>Dificuldade *</FieldLabel>
                        <Select
                          name={field.name}
                          value={field.state.value}
                          onValueChange={field.handleChange}
                        >
                          <SelectTrigger
                            id="form-submit-recipe-select-difficulty"
                            aria-invalid={isInvalid}
                          >
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            {difficulties.slice(1).map((difficulty) => (
                              <SelectItem
                                value={difficulty.value}
                                key={`difficulty-${difficulty.value}`}
                              >
                                {difficulty.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="time"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>Tempo (min) *</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => {
                            field.handleChange(e.target.value);
                          }}
                          aria-invalid={isInvalid}
                          placeholder="30"
                          type="number"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="servings"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>Porções *</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="number"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="4"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </div>
              <form.Field
                name="image"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Imagem da receita *</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="file"
                        accept="image/*"
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.handleChange(file);
                          } else {
                            field.handleChange(null);
                          }
                        }}
                        aria-invalid={isInvalid}
                        placeholder="https://..."
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <form.Field name="ingredients" mode="array">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Ingredientes *</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => field.pushValue("")}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Adicionar
                        </Button>
                      </div>

                      {field.state.value.map((_, index) => (
                        <form.Field
                          key={index}
                          name={`ingredients[${index}]`}
                          children={(subField) => {
                            const isSubInvalid =
                              subField.state.meta.isTouched &&
                              !subField.state.meta.isValid;
                            return (
                              <>
                                <div className="flex gap-2 items-start">
                                  <Input
                                    value={subField.state.value}
                                    onBlur={subField.handleBlur}
                                    onChange={(e) =>
                                      subField.handleChange(e.target.value)
                                    }
                                    placeholder={`Ingrediente ${
                                      index + 1
                                    } - Ex: 500gr mussarela`}
                                    aria-invalid={isSubInvalid}
                                  />
                                  {field.state.value.length > 1 && (
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => field.removeValue(index)}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  )}
                                </div>
                                {isSubInvalid && (
                                  <FieldError
                                    errors={subField.state.meta.errors}
                                  />
                                )}
                              </>
                            );
                          }}
                        />
                      ))}

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </div>
                  );
                }}
              </form.Field>
              <form.Field name="instructions" mode="array">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Modo de preparo *</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => field.pushValue("")}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Adicionar
                        </Button>
                      </div>

                      {field.state.value.map((_, index) => (
                        <form.Field
                          key={index}
                          name={`instructions[${index}]`}
                          children={(subField) => {
                            const isSubInvalid =
                              subField.state.meta.isTouched &&
                              !subField.state.meta.isValid;
                            return (
                              <>
                                <div className="flex gap-2 items-start">
                                  <Textarea
                                    value={subField.state.value}
                                    onBlur={subField.handleBlur}
                                    onChange={(e) =>
                                      subField.handleChange(e.target.value)
                                    }
                                    placeholder={`Passo ${index + 1}`}
                                    aria-invalid={isSubInvalid}
                                    rows={2}
                                  />
                                  {field.state.value.length > 1 && (
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="my-auto"
                                      onClick={() => field.removeValue(index)}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  )}
                                </div>
                                {isSubInvalid && (
                                  <FieldError
                                    errors={subField.state.meta.errors}
                                  />
                                )}
                              </>
                            );
                          }}
                        />
                      ))}

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </div>
                  );
                }}
              </form.Field>
            </FieldGroup>
          </form>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              size={"lg"}
              form="register-recipe"
              className="flex-1"
            >
              Publicar Receita
            </Button>
            <Button type="button" size={"lg"} variant="outline" asChild>
              <Link to="/">Cancelar</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SubmitRecipe;

