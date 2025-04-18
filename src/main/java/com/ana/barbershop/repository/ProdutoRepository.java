package com.ana.barbershop.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ana.barbershop.entity.Produto;
import com.ana.barbershop.produtodto.ProdutoDTO;


@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    Produto save(ProdutoDTO dto);
    // Aqui você pode adicionar métodos personalizados, se necessário
     

}
