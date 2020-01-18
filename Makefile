FILE  := main
OUT   := build
PLANT := figures/plant

.PHONY: pdf
pdf:
	latexmk -interaction=nonstopmode -outdir=$(OUT) -pdf -halt-on-error $(FILE)

.PHONY: watch
watch:
	latexmk -interaction=nonstopmode -outdir=$(OUT) -pdf -pvc -halt-on-error $(FILE)

.PHONY: clean
clean:
	rm -rf $(filter-out $(OUT)/$(FILE).pdf, $(wildcard $(OUT)/*))

.PHONY: purge
purge:
	rm -rf $(OUT)

.PHONY: latexfigure
latexfigure:
	cd ${PLANT} && cat $(file).wsd | java -jar /Applications/plantuml.jar -tlatex -pipe > out/${file}.tex

.PHONY: latexfigure-all
latexfigure-all: 
	for i in ${PLANT}/*wsd; do \
		file=$$(basename $$i | sed "s/\..*//"); \
		make latexfigure file=$$file; \
	done