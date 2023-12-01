package com.huusy.casespring3java17.service;

import java.util.Optional;

public interface IGenerateService<T>{
    Iterable<T> findAll();
    Optional<T> findByOne(Long id);

    void save(T t);
    void delete(Long id);
}
