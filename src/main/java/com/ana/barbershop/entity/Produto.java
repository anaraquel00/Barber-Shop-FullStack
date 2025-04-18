package com.ana.barbershop.entity;
import java.math.BigDecimal;

import com.ana.barbershop.entity.Produto.EstoqueStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "produto")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "nome", nullable = false, length = 100)
    private String nome;
    @Column(name = "preco", nullable = false, precision = 10, scale = 2)
    private BigDecimal preco;
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;
    @Column(name = "categoria", length = 20)
    private String categoria;
    @Enumerated(EnumType.STRING) 
    @Column(name = "estoque", nullable = false, length = 11) 
    private EstoqueStatus estoque;

    public enum EstoqueStatus {
        EM_ESTOQUE, 
        ESGOTADO
    }

}
