const Router = require("express").Router;

const router = Router();

class Job {
    constructor(jobs) {
        this.jobs = jobs;
    }

    readList() {
        return [this.jobs];
    }

    read(id) {
        const job = this.jobs.find(
            function (job) {
                return job.id === parseInt(id);
            }
        );
        return job;
    }

    create(newJob) {
        newJob.id = this.jobs.length + 1;
        this.jobs.push(newJob);
        return newJob;
    }

    update(updatedJob, id) {
        const index = this.jobs.findIndex(
            (job) => job.id === parseInt(id));
        if (index !== -1) {
            this.jobs[index] = updatedJob;
            return this.jobs[index];
        }
        return false;
    }

    delete(id) {
        const index = this.jobs.findIndex((job) => job.id === parseInt(id));
        if (index !== -1) {
            this.jobs.splice(index, 1);
            return true;
        }
        return false;
    }
}

let jobs = new Job([
    { id: 1, nome: "Maryângela Soares", idade: 30, casada: true},
    { id: 2, nome: "Rodrigo Soares", idade: 39, casado: false},
    { id: 3, nome: "Jonatan Eugênio", idade: 28, casado: true },
    { id: 4, nome: "Wellington Murito", idade: 30, casado: false },
]);

// Rota GET para exibir uma lista de cadastro;
router.get("/job",
    function (req, res) {
        try {
            let ArrayTodosJobs = jobs.readList();
            if (ArrayTodosJobs) {
                res.status(200).json(ArrayTodosJobs);
            } else {
                res.status(404).send("Nenhum cadastro encontrado!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }

    }
);
// Rota GET para exibir um cadastro específico;
router.get("/job/:id",
    function (req, res) {
        try {
            const { id } = req.params;
            let ArrayJobEspecifico = jobs.read(id);
            if (ArrayJobEspecifico) {
                res.status(200).json(ArrayJobEspecifico);
            } else {
                res.status(404).send("Cadastro Encntrado!");
            }
        }
        catch (error) {
            res.status(400).json(error.message);
        }
    }
);

// Rota POST para criar um novo cadastro;
router.post("/job",
    function (req, res) {
        try{
            const newJob = req.body;
            jobs.create(newJob);
            res.status(201).send("Cadastro Criado com Sucesso!");
        }catch(error){
            res.status(400).json(error.message);
        }
    }
);

// Rota PUT para atualizar um cadastro específico;
router.put("/job/:id",
    function (req, res) {
        try{
            const { id } = req.params;
            const updatedJob = req.body;
            let ArrayJobAtualizado = jobs.update(updatedJob, id);
            if (ArrayJobAtualizado){
                res.status(200).send("Cadastro Atualizado com Sucesso!");
            } else {
                res.status(404).send("Cadastro Não Encontrado!");
            }
        } catch(error){
            res.status(400).json(error.message);
        }
    }
);

router.delete("/job/:id",
    function (req, res) {
        try{
            const { id } = req.params;
            let ArrayJobExcluido = jobs.delete(id);
            if (ArrayJobExcluido){
                res.status(200).send("Cadastro excluído com Sucesso!");
            } else {
                res.status(404).send("Cadastro Não Encontrado!");
            }
        } catch(error){
            res.status(400).json(error.message);
        }
    }
);

module.exports = router;