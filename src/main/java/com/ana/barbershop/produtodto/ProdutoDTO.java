package com.ana.barbershop.produtodto;

import java.math.BigDecimal;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
// DTO (Data Transfer Object) para representar um produto
public class ProdutoDTO {
    @jakarta.validation.constraints.NotBlank(message = "Nome é obrigatório")
    private String nome;

    @jakarta.validation.constraints.NotNull(message = "Preço é obrigatório")
    @jakarta.validation.constraints.DecimalMin(value = "0.01", message = "Preço deve ser maior que zero")
    private BigDecimal preco;

    @jakarta.validation.constraints.Size(max = 500, message = "Descrição deve ter no máximo 500 caracteres")
    private String descricao;

    @jakarta.validation.constraints.NotBlank(message = "Categoria é obrigatória")
    private String categoria;
    
    @NotBlank(message = "Estoque é obrigatório")
    private String estoque;

}
      
  
